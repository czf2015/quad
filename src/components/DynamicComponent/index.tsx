import React, { useMemo, Suspense } from 'react'

const packages = {
  react: React,
}

const getParsedModule = (code) => {
  let module = {
    exports: {},
  }
  const require = (url) => {
    return packages[url]
  }
  Function('require, exports, module', code)(require, module.exports, module)
  return module
}

const fetchComponent = async (url) => {
  const text = await fetch(url).then((a) => {
    if (!a.ok) {
      throw new Error('Network response was not ok')
    }
    return a.text()
  })
  const module = getParsedModule(text, url)
  return {default: module.exports}
}

const DynamicComponent = ({url, children, ...props}) => {
  const Component = useMemo(() => {
    return React.lazy(async () => fetchComponent(url))
  }, [url])

  return (
    <Suspense
      fallback={
        <div style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <span style={{fontSize: 50}}>Loading...</span>
        </div>
      }>
      <Component {...props}>{children}</Component>
    </Suspense>
  )
}

export default React.memo(DynamicComponent)

// 作者：Aaaaaaaaaaayou
// 链接：https://juejin.cn/post/7040435885749305381
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。