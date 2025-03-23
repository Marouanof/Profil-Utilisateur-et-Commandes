const userData ={
    name : 'John Doe',
    email : 'johndoe@gmail.com',
    avatar : 'batman.webp',
    gender : 'M',
    login: 'johndoe123',
    password: 'password123',  
    address: {
        street: '123 Main St',
        city: 'Anytown',
        postalCode: '12345'
    }
}
const ordersData = [
    { id: 1, description: 'Commande 1 - T-shirt' },
    { id: 2, description: 'Commande 2 - Pantalon' },
    { id: 3, description: 'Commande 3 - Chaussures' }
];
function fetchuserdata(){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(userData);
        },1000)
    });
}
function fetchUsersOrders(){
    return new Promise(resolve => {
        setTimeout(() => 
            resolve(ordersData),1000)
    });
}
async function display(){
    const user = await fetchuserdata();
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userLogin").textContent = user.login;
    document.getElementById("userPassword").textContent = user.password;
    document.getElementById("userAddress").textContent = `${user.address.street},${user.address.city},${user.address.postalCode}`;
    document.getElementById("avatar").src = user.avatar;
    document.getElementById("userGender").textContent = user.gender;
    const data = await fetchUsersOrders();
    const ordersList = document.getElementById("ordersList");
    ordersList.innerHTML =data.map((order)=>  `<li>${order.description}</li>`).join('');
}
display();