const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Estudiantes de nuevo ingreso:
Enfócate en la emoción de empezar una nueva etapa y las oportunidades que les esperan.
Destaca la importancia de la formación técnica y su impacto en el futuro profesional.
Motívalos a aprovechar al máximo los recursos que el ITSE les ofrece.
Porque todos somos ITSE');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
