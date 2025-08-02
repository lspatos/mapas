const scriptURL = 'https://script.google.com/macros/s/AKfycbzHplLJfdWiN5guNui_mE3UoTP-4HPmwqIxD5VsYhROusJA8-w76NqTcd9L6AEeiQMEJA/exec';

function handleSubmit(event, status, secao) {
    event.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbzHplLJfdWiN5guNui_mE3UoTP-4HPmwqIxD5VsYhROusJA8-w76NqTcd9L6AEeiQMEJA/exec', {
        method: 'POST',
        body: JSON.stringify({
            status: status,
            secao: secao
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert(`Status "${status}" enviado da seção "${secao}"!`);
        } else {
            alert("Erro ao enviar. Tente novamente.");
        }
    })
    .catch(error => alert("Erro de conexão: " + error.message));
}
