'use strict';

function soma({ a = 0, b = 0 }) {
  const response = { resultado: Number(a) + Number(b) };
  console.log('log', response);
  return response;
}

function subtracao({ a = 0, b = 0 }) {
  const response = { resultado: Number(a) - Number(b) };
  console.log('log', response);
  return response;
}


exports.soma = soma;
exports.subtracao = subtracao;
