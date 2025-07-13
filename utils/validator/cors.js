const allowedOrigin = ["https://frontend-svelte-one.vercel.app", "http://localhost:5173"];

const origin = function(origin, callback) {
  if (!origin) return callback(null, true);
  if (allowedOrigin.includes(origin)) {
    callback(null, true)
  } else {
    callback(new Error('Origgin not allowed by CORS'));
  }
}

module.exports = origin;