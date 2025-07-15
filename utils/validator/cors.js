const allowedOrigin = ["https://frontend-svelte-one.vercel.app", "https://project-vue-two.vercel.app"];

const origin = function(origin, callback) {
  if (!origin) return callback(null, true);
  if (allowedOrigin.includes(origin)) {
    callback(null, true)
  } else {
    callback(new Error('Origgin not allowed by CORS'));
  }
}

module.exports = origin;
