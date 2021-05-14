const express = require('express');

const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { router } = require('./routes/routes');

dotenv.config();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);
app.use(
  '/photos',
  express.static(`${__dirname}/helpers`),
);

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(process.env.PORT, () => console.log(`listen ${process.env.PORT}`));

module.exports = app;
