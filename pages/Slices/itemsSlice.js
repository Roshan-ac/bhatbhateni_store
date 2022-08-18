
export const selectProductBySlug = async (state, slug) => {
    const response = await fetch('http://localhost:3000/api/getProducts');
    const product = await response.json()
    return  await product.find(item => item.slug === slug)
}