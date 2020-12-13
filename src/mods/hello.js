export default function hello(nameArray) {
  nameArray.forEach(name => {
    const greeting = name.toLowerCase() === 'jerry' || name.toLowerCase() === 'newman' ? 'Hello...' : 'Hi';
    console.log(`${greeting} ${name}.`)
  });
}
