import {bind, decorate} from 'alt-utils/lib/decorators';
import Actions from '../actions';
import alt from '../alt';

@decorate(alt)
class ChatStore {
  constructor() {
    this.state = {user: null};
  }

  @bind(Actions.login)
  login(user) {
    this.setState({user});
  }
}

export default alt.createStore(ChatStore);
