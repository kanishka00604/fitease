// SIGNUP
async function signup() {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  const response = await fetch('/auth/signup', {  // ✅ MATCHES route
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

  if (response.redirected) {
    window.location.href = response.url;
  } else {
    alert(await response.text());
  }
}

// LOGIN
async function login() {
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  const response = await fetch('/auth/login', {  // ✅ MATCHES route
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (response.redirected) {
    window.location.href = response.url;
  } else {
    alert(await response.text());
  }
}
