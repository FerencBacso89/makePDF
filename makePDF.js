    function generatePDF() {
            var element = document.getElementById('InvoiceData');
            var opt = {
                margin: 1,
                filename: 'devInvoice.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'cm', format: 'A4', orientation: 'portrait' }
            };
            html2pdf().from(element).set(opt).save();
        }