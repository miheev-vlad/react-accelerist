import { createSelector } from 'reselect';
import { RootState } from '../../configureStore';
import { UserStateProps } from './userSlice';

const user = (state: RootState) => state.user;

function nameSelector() {
  return createSelector(user, (user: UserStateProps) => user.email);
}

export default nameSelector;
