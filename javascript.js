<script>
    grecaptcha.ready(function() {
        grecaptcha.execute('XXXXXXXXXXXXXXXXXXXXXXXXX', { action: 'homepage' }).then(function(token) {
            // fetch:
            fetch('/your-server-side-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: token })
            })
            .then(response => {
                            
              console.log(response);
                            
            })
            .catch(error => {
                
              console.error('Error:', error);
            });
        });
    });
</script>
