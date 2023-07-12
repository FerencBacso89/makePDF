    function generatePDF() {
            var element = document.getElementById('formdata');
            var opt = {
                margin: 1,
                filename: 'formdata.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(element).set(opt).save();
        }