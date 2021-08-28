require ('./html2pdf.bundle.min');

function generatePDF() {
    const element = document.getElementById("pdfWrapper");
    const targetElement = document.querySelector('#pdfWrapper .card__body');
    let divHeight = targetElement.offsetHeight;
    let divWidth = targetElement.offsetWidth;

    // Since the height is gotten in pixel, It has to be converted to mm.
    // Note that 1px = 0.264583333 mm
    // 15 is added to the height in order to prevent the page from trying to generate another page.
    // This give room for allowance on that single page.
    divHeight = (divHeight * 0.264583333) + 15;
    divWidth = divWidth * 0.264583333;
    html2pdf()
        .set({
            html2canvas: { scale: 5 },
            jsPDF: { unit: 'mm', format: [divWidth, divHeight], orientation: 'portrait' },
            filename: 'Fundraising Teaser.pdf',
        })
        .from(element)
        .save();
}