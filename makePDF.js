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
        const serviceInput =document.querySelector(".inputService");
         const tax = serviceInput.querySelector("#stax").value.replace(/[^0-9\.]/g, '');
         const net = serviceInput.querySelector("#snet").value.replace(/[^0-9]/g, '');
            alert(tax);
        if(tax!= "" && net != ""){
            const addBtn = document.getElementById("addServiceBtn");
            const tbody = document.querySelector("#servTable tbody");

                const newRow = document.createElement("tr");
            if (serviceInput.querySelector("#sname").value != "none"){                    
                const serviceId = serviceInput.querySelector("#sname").value;
                const serviceName = document.getElementById("sname").selectedOptions[0].textContent;
            
                let calcGross = (1+(parseFloat(tax)/100))*parseInt(net);
                
                const gross = calcGross; // to be calculate-> net*((tax/100)+1)
                    const values = [serviceId, serviceName, tax, net, gross];

                    values.forEach(value => {
                        const cell = document.createElement("td");
                        cell.textContent = value;
                        newRow.appendChild(cell);
                    });
                // Append the new row to the table body
            tbody.appendChild(newRow);
            errorMsg.style.display="none";
            serviceInput.querySelector("#snet").value="";
            } else{
                // entering an empty data line is not allowed
                errorMsg.style.display="block";
                errorMsg.textContent="Entering an empty data line is not allowed."
            }
      }
      else{
            errorMsg.style.display="block";
                errorMsg.textContent="Entering string data in this line is not allowed."
      }
    }
    