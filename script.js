document.querySelector("#home-blue").addEventListener("mouseover", function() {
    document.querySelector("#home-blue").style.color = 'var(--primary-color)';
    document.querySelector("#home-blue").style.transition = 'all 0.3s ease';
    document.querySelector("#order-blue").style.color = 'var(--description-color)';
    document.querySelector("#company-blue").style.color = 'var(--description-color)';
    document.querySelector("#faq-blue").style.color = 'var(--description-color)';
    document.querySelector("#contact-blue").style.color = 'var(--description-color)';
});
document.querySelector("#order-blue").addEventListener("mouseover", function() {
    document.querySelector("#order-blue").style.color = 'var(--primary-color)';
    document.querySelector("#order-blue").style.transition = 'all 0.3s ease';
    document.querySelector("#home-blue").style.color = 'var(--description-color)';
    document.querySelector("#company-blue").style.color = 'var(--description-color)';
    document.querySelector("#faq-blue").style.color = 'var(--description-color)';
    document.querySelector("#contact-blue").style.color = 'var(--description-color)';
});
document.querySelector("#company-blue").addEventListener("mouseover", function() {
    document.querySelector("#company-blue").style.color = 'var(--primary-color)';
    document.querySelector("#company-blue").style.transition = 'all 0.3s ease';
    document.querySelector("#home-blue").style.color = 'var(--description-color)';
    document.querySelector("#order-blue").style.color = 'var(--description-color)';
    document.querySelector("#faq-blue").style.color = 'var(--description-color)';
    document.querySelector("#contact-blue").style.color = 'var(--description-color)';
});
document.querySelector("#faq-blue").addEventListener("mouseover", function() {
    document.querySelector("#faq-blue").style.color = 'var(--primary-color)';
    document.querySelector("#faq-blue").style.transition = 'all 0.3s ease';
    document.querySelector("#home-blue").style.color = 'var(--description-color)';
    document.querySelector("#order-blue").style.color = 'var(--description-color)';
    document.querySelector("#company-blue").style.color = 'var(--description-color)';
    document.querySelector("#contact-blue").style.color = 'var(--description-color)';
});
document.querySelector("#contact-blue").addEventListener("mouseover", function() {
    document.querySelector("#contact-blue").style.color = 'var(--primary-color)';
    document.querySelector("#contact-blue").style.transition = 'all 0.3s ease';
    document.querySelector("#home-blue").style.color = 'var(--description-color)';
    document.querySelector("#order-blue").style.color = 'var(--description-color)';
    document.querySelector("#faq-blue").style.color = 'var(--description-color)';
    document.querySelector("#company-blue").style.color = 'var(--description-color)';
});


document.querySelector("#burguers").addEventListener("click", function() {
    document.querySelector("#burguers").style.backgroundColor = 'var(--primary-color)';
    document.querySelector("#burguers").style.color = '#fff';
    document.querySelector("#sides").style.backgroundColor = 'transparent';
    document.querySelector("#sides").style.color = '#000';
    document.querySelector("#drinks").style.backgroundColor = 'transparent';
    document.querySelector("#drinks").style.color = '#000';
});
document.querySelector("#sides").addEventListener("click", function() {
    document.querySelector("#sides").style.backgroundColor = 'var(--primary-color)';
    document.querySelector("#sides").style.color = '#fff';
    document.querySelector("#burguers").style.backgroundColor = 'transparent';
    document.querySelector("#burguers").style.color = '#000';
    document.querySelector("#drinks").style.backgroundColor = 'transparent';
    document.querySelector("#drinks").style.color = '#000';
});
document.querySelector("#drinks").addEventListener("click", function() {
    document.querySelector("#drinks").style.backgroundColor = 'var(--primary-color)';
    document.querySelector("#drinks").style.color = '#fff';
    document.querySelector("#burguers").style.backgroundColor = 'transparent';
    document.querySelector("#burguers").style.color = '#000';
    document.querySelector("#sides").style.backgroundColor = 'transparent';
    document.querySelector("#sides").style.color = '#000';
});

document.querySelector("#burguers").addEventListener("click", function() {
    document.querySelector("#row-um-burguers").style.display = 'flex';
    document.querySelector("#row-dois-burguers").style.display = 'flex';
    document.querySelector("#row-tres-burguers").style.display = 'flex';
    document.querySelector("#row-um-sides").style.display = 'none';
    document.querySelector("#row-dois-sides").style.display = 'none';
    document.querySelector("#row-um-drinks").style.display = 'none';
    document.querySelector("#row-dois-drinks").style.display = 'none';
});
document.querySelector("#sides").addEventListener("click", function() {
    document.querySelector("#row-um-burguers").style.display = 'none';
    document.querySelector("#row-dois-burguers").style.display = 'none';
    document.querySelector("#row-tres-burguers").style.display = 'none';
    document.querySelector("#row-um-sides").style.display = 'flex';
    document.querySelector("#row-dois-sides").style.display = 'flex';
    document.querySelector("#row-um-drinks").style.display = 'none';
    document.querySelector("#row-dois-drinks").style.display = 'none';
});
document.querySelector("#drinks").addEventListener("click", function() {
    document.querySelector("#row-um-burguers").style.display = 'none';
    document.querySelector("#row-dois-burguers").style.display = 'none';
    document.querySelector("#row-tres-burguers").style.display = 'none';
    document.querySelector("#row-um-sides").style.display = 'none';
    document.querySelector("#row-dois-sides").style.display = 'none';
    document.querySelector("#row-um-drinks").style.display = 'flex';
    document.querySelector("#row-dois-drinks").style.display = 'flex';
});