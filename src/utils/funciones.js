export const gotoTop = () => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 150, left: 0, behavior: 'smooth' });
}


export const title = value => {
    let newValue = `Turismo - ${value}`
    document.title = newValue;
}
