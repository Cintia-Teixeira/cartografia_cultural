export default () => ({
     supersecret: process.env.SUPER_SECRET_KEY,
     privatetoken: process.env.PRIVATE_TOKEN,
     mongourl: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
});
