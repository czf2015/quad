// @ts-nocheck
// reference: https://zhuanlan.zhihu.com/p/47746336
import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import monaco, { createInstance } from '@/plugins/monaco'

const defaultOptions = {
	language: 'typescript',
	tabSize: 2,
}

export default forwardRef(({
	value = ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
	onChange,
	options = defaultOptions,
	style = { width: '100%', height: 192, border: 'border: 1px solid #ccc' },
}, ref) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const instanceRef = useRef<monaco.editor.IStandaloneCodeEditor>(null)
	useImperativeHandle(ref, () => {
		return {
			get value() {
				return instanceRef.current.getValue()
			},
		}
	});
	useEffect(() => {
		instanceRef.current = createInstance({ value, container: containerRef.current, options: { ...defaultOptions, ...options } })
		instanceRef.current.onDidChangeModelContent((e) => {
			if (onChange && typeof onChange == 'function') {
				const value = instanceRef.current.getValue()
				onChange(value)
			}
		});
		return () => {
			instanceRef.current.dispose();
		};
	}, []);


	return <div ref={containerRef} style={style} />;
})

