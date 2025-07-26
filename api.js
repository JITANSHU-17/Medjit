const API_CONFIG = {
  APP_ID: 'Wbf4aGT4IL7fUpgHrYwCmSug1vj12Gya3BJpn8Q9',
  REST_API_KEY: 'tFaRTvQUNVFN739bH218945ax0QxTOgHHQcNPovT',
  SERVER_URL: ' https://parseapi.back4app.com', // Back4App API server
};

const headers = {
  'X-Parse-Application-Id': API_CONFIG.APP_ID,
  'X-Parse-REST-API-Key': API_CONFIG.REST_API_KEY,
  'Content-Type': 'application/json'
};

// ===================== Product APIs =====================

// CREATE Product
export async function createProduct(product) {
  const res = await fetch(`${API_CONFIG.SERVER_URL}/classes/Products`, {
    method: 'POST',
    headers,
    body: JSON.stringify(product)
  });
  return res.json();
}

// GET All Products
export async function getAllProducts() {
  const res = await fetch(`${API_CONFIG.SERVER_URL}/classes/Products`, {
    method: 'GET',
    headers
  });
  return res.json();
}

// GET Product by ID
export async function getProductById(objectId) {
  const res = await fetch(`${API_CONFIG.SERVER_URL}/classes/Products/${objectId}`, {
    method: 'GET',
    headers
  });
  return res.json();
}

// UPDATE Product
export async function updateProduct(objectId, updates) {
  const res = await fetch(`${API_CONFIG.SERVER_URL}/classes/Products/${objectId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(updates)
  });
  return res.json();
}

// DELETE Product
export async function deleteProduct(objectId) {
  const res = await fetch(`${API_CONFIG.SERVER_URL}/classes/Products/${objectId}`, {
    method: 'DELETE',
    headers
  });
  return res.json();
}

// ===================== Order APIs =====================

// CREATE Order
export async function createOrder(order) {
  const res = await fetch(`${API_CONFIG.SERVER_URL}/classes/Orders`, {
    method: 'POST',
    headers,
    body: JSON.stringify(order)
  });
  return res.json();
}

// GET All Orders
export async function getAllOrders() {
  const res = await fetch(`${API_CONFIG.SERVER_URL}/classes/Orders`, {
    method: 'GET',
    headers
  });
  return res.json();
}

// ===================== User APIs =====================

// CREATE User (Register)
export async function registerUser(user) {
  const res = await fetch(`${API_CONFIG.SERVER_URL}/classes/Users`, {
    method: 'POST',
    headers,
    body: JSON.stringify(user)
  });
  return res.json();
}

// GET All Users
export async function getAllUsers() {
  const res = await fetch(`${API_CONFIG.SERVER_URL}/classes/Users`, {
    method: 'GET',
    headers
  });
  return res.json();
}

// ===================== Auth APIs =====================

// LOGIN User (Admin)
export async function loginUser(username, password) {
  try {
    const result = await Parse.Cloud.run("adminLogin", { username, password });

    // Ensure result contains needed info
    if (result.success && result.sessionToken) {
      return {
        sessionToken: result.sessionToken,
        username: result.username
      };
    } else {
      throw new Error(result.message || "Login failed");
    }
  } catch (err) {
    throw err;
  }
}
