document.addEventListener("DOMContentLoaded", () => {
  const settingsElementOne = document.getElementById("settings-1");
  const paymentEliment = document.getElementById("payment");
  const settingsElementtwo = document.getElementById("settings-2");
  const customerElement = document.getElementById("customer");
  const contentElement = document.getElementById("content");

  settingsElementOne.addEventListener("click", function (event) {
    contentElement.innerHTML = `
    <h3>Account settings</h3>
     <form id="account-settings-form">
        <label for="password">Change Password:</label>
        <input type="password" id="password" name="password" required>
        
        <button type="submit">Save</button>
      </form>
  `;
  });
  paymentEliment.addEventListener("click", function (event) {
    contentElement.innerHTML = `
    <h3>Payment Methods</h3>
      <form> 
        <div>
            <label for="cardnr">Your card number</label>
            <input type="text" id="cardnr">
        </div>
        <br>
        <div>
            <label for="valid-thru">Valid thru</label>
            <input type="text" id="valid-thru">
        </div>
        <br>
        <div>
            <label for="cvc">CVC</label>
            <input type="text" id="cvc">
        </div>
    
        <br>
        <button type="submit" id="submit">Submit</button>


    </form>

  `;
  });
  settingsElementtwo.addEventListener("click", function (event) {
    contentElement.innerHTML = `
    <h3>General settings</h3>
  `;
  });
  customerElement.addEventListener("click", function (event) {
    contentElement.innerHTML = `
    <h3>Customer support</h3>
  `;
  });
});
