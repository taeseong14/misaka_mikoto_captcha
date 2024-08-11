console.log('api.js loaded');

window.onload = () => {
    const captchaEl = document.querySelector('#m-captcha');
    if (!captchaEl) {
        console.error('captcha element not found');
        return;
    }

    captchaEl.innerHTML = `
    <iframe src="http://localhost:3000/captcha" width="300px" height="74px" frameborder="0"></iframe>
    `
}