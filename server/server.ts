
import app from './app';

const httpServer = app.listen(9000, () => {
  console.log('Server is running at at http://localhost:' + httpServer.address()["port"]);
});
