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
    AddServiceToTable=()=>{
        const addBtn = document.getElementById("addServiceBtn"); 
        const tbody = document.querySelector("#servTable tbody");

            const newRow = document.createElement("tr");
            const serviceInput =document.querySelector(".inputService");
            
            const serviceId = serviceInput.querySelector("#sid").value;
            const serviceName = serviceInput.querySelector("#sname").value;
            const tax = serviceInput.querySelector("#stax").value;
            const net = serviceInput.querySelector("#snet").value;
            const gross = serviceInput.querySelector("#sgross").value; // to be calculate-> net*((tax/100)+1)
                const values = [serviceId, serviceName, tax, net, gross];

                values.forEach(value => {
                    const cell = document.createElement("td");
                    cell.textContent = value;
                    newRow.appendChild(cell);
                });
            // Append the new row to the table body
        tbody.appendChild(newRow);
    }
    