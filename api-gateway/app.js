require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// buat route arahin ke file yg mana
const indexRouter = require('./routes/index');
const coursesRouter = require('./routes/courses');
const usersRouter = require('./routes/users');
const mediaRouter = require('./routes/media');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// route utk di web
app.use('/', indexRouter);
app.use('/users', usersRouter); // blablabla.com/users => setelah koma menyesuaikan route yg udh dibuat di atas
app.use('/courses', coursesRouter);
app.use('/media', mediaRouter);
app.use('/media', mediaRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentsRouter);

module.exports = app;