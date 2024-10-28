import app from './app'; // Importe a aplicação configurada

const port = 3333;

app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
