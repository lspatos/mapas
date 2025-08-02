const scriptURL = 'https://script.google.com/macros/s/AKfycbxqCd1wsk2r31j73iY0RUFW-2rMLhdMnc1osjf_YduIyvPeArJVwyeEQXrwPdX2bjSaYw/exec';

function handleSubmit(event, status, secao) {
    event.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbxqCd1wsk2r31j73iY0RUFW-2rMLhdMnc1osjf_YduIyvPeArJVwyeEQXrwPdX2bjSaYw/exec', {
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
