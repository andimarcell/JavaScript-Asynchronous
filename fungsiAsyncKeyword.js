// async function hello() {}

const hello = async () => {
    throw 'Ups, terjadi kesalahan';
    // return "Hello World";
};

hello().then((res) => {
    console.log('response', res);
}).catch((err) => {
    console.log('error', err);
});