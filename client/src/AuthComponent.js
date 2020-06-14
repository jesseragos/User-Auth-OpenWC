import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import store from './state/store.js';
// import { incrementPage } from './state/actions/authActions.js';

export class AuthComponent extends connect(store)(LitElement) {
  static get properties() {
    return {
      title: { type: String },
      page: { type: Number },
    };
  }

  stateChanged(state) {
    this.title = state.title;
    this.page = state.page;
  }

  static get styles() {
    return css`
      /* :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      } */
    `;
  }

  render() {
    return html`
      <main>
        Title:
        <div class="title">${this.title}</div>
        Page:
        <div class="page">${this.page}</div>
        <button class="incrementBtn">
          Increment
        </button>
      </main>

      <div class='container'>
        <div class='row'>
          <div class='col s8 offset-s2'>
            <Link to='/' class='btn-flat waves-effect'>
              <i class='material-icons left'>keyboard_backspace</i> Back to
              home
            </Link>
            <div class='col s12'>
              <h4>
                <b>Register</b> below
              </h4>
              <p class='grey-text text-darken-1'>
                Already have an account? <Link to='/login'>Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div class='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id='name'
                  type='text'
                />
                <label htmlFor='name'>Name</label>
                <span class='red-text'>{errors.name}</span>
              </div>
              <div class='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id='email'
                  type='email'
                />
                <label htmlFor='email'>Email</label>
                <span class='red-text'>{errors.email}</span>
              </div>
              <div class='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id='password'
                  type='password'
                />
                <label htmlFor='password'>Password</label>
                <span class='red-text'>{errors.password}</span>
              </div>
              <div class='input-field col s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id='password2'
                  type='password'
                />
                <label htmlFor='password2'>Confirm Password</label>
                <span class='red-text'>{errors.password2}</span>
              </div>
              <div class='col s12'>
                <button
                  type='submit'
                  class='btn btn-large waves-effect waves-light hoverable blue accent-3'
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}
