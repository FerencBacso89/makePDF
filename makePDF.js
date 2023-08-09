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
         errorMsg.style.display="none";
        const serviceInput =document.querySelector(".inputService");
        //check the inputfield data is a number or not
         const tax = serviceInput.querySelector("#stax").value.replace(/[^0-9\.]/g, '');
         const net = serviceInput.querySelector("#snet").value.replace(/[^0-9]/g, '');
         // if inputfield not a number tax & net has got an empty string and going to the else. 
         //After this throw an error message.
        if(tax!= "" && net != "" ){
            const addBtn = document.getElementById("addServiceBtn");
            const tbody = document.querySelector("#servTable tbody");

                const newRow = document.createElement("tr");
            if (serviceInput.querySelector("#sname").value != "none"){                    
                const serviceId = serviceInput.querySelector("#sname").value;
                const serviceName = document.getElementById("sname").selectedOptions[0].textContent;
            
                let calcGross = (1+(parseFloat(tax)/100))*parseInt(net);
                const gross = Math.round(calcGross)+" EUR"; // to be calculate-> net*((tax/100)+1)
                // Check Customer data is filled or not
                let name = document.getElementById("name").value;
                let email = document.getElementById("email").value;
                let phone = document.getElementById("phone").value;
                    if (name!="" && email!="" && phone!=""){
                            document.getElementById("cusName").innerText=name;
                            document.getElementById("cusMail").innerText=email;
                            document.getElementById("cusPhone").innerText=phone;
                                 
                    const values = [serviceId, serviceName, tax, net, gross];

                        values.forEach(value => {
                            const cell = document.createElement("td");
                            cell.textContent = value;
                            newRow.appendChild(cell);
                        });
                    }
                    else{                       
                        errorMsg.style.display="block";
                        errorMsg.textContent="Customer data is not filled. Please fill up your customer's data";
                    } 
                   
                // Append the new row to the table body
                tbody.appendChild(newRow);           
            serviceInput.querySelector("#snet").value="";
            } else{
                // entering an empty data line is not allowed
                errorMsg.style.display="block";
                errorMsg.textContent="Entering an empty data line is not allowed."
            }
      }
      else{
            errorMsg.style.display="block";
                errorMsg.textContent="Please entering only numeric data Service Tax and Net price fields."
      }
    }
    