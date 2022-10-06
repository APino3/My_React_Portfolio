import "./style.css";

export default function Contact(props) {
  return (
    <div>
      <h1>Albalicia Espino</h1>
      <h2>Dallas, TX</h2>
      <hr />
      <p>Phone</p>
      <br />
      <i class="material-icons">add_shopping_cart</i>
      <p>(972)201-8313</p>

      <p>General Information</p>
      <h4>GitHub Link:</h4>
      <div class="card-action">
        <a href="https://github.com">Github link</a>
      </div>

      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input
                placeholder="Placeholder"
                id="first_name"
                type="text"
                class="validate"
              />
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                disabled
                value="I am not editable"
                id="disabled"
                type="text"
                class="validate"
              />
              <label for="disabled">Disabled</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              This is an inline input field:
              <div class="input-field inline">
                <input id="email_inline" type="email" class="validate" />
                <label for="email_inline">Email</label>
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Helper text
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
