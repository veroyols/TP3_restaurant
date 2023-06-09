import Footer from '../components/Footer.js';

const renderFooter = async () => {
    let foot = document.getElementById('foot');
    foot.innerHTML = Footer();
}

export default renderFooter;
