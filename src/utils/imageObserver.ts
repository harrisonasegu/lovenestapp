export const imageObserver = (el: any, options: {}) => {
    const observer = new IntersectionObserver((entries: any): void => {
        entries.forEach((entry: any, i: number) => {
            const imgEl = entry.target.firstElementChild as HTMLImageElement

            // image is not on the viewport
             if (!entry.isIntersecting) {
                // imgEl?.removeAttribute('src')
                observer.unobserve(imgEl)

                return
            }
            
            // image is on the viewport
            const imageUrls = entry.target.firstElementChild?.getAttribute('data-url').split('---')

            imgEl.setAttribute('src', imageUrls[0])
            imgEl.onmouseover = () => imageUrls[1] ? imgEl.setAttribute('src', imageUrls[1]) : false
            imgEl.onmouseout = () => imgEl.setAttribute('src', imageUrls[0])
        })
    }, options)

    // check existense of element collection
    el?.length
        ? el.forEach((item: HTMLElement) => observer.observe(item))
        : observer.observe(el)
}
