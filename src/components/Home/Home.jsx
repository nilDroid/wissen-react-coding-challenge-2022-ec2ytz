import React from "react";
import { connect } from "react-redux";
import { authActions } from "../../store/actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }

  componentDidMount() {
    this.props.getUserList(this.props.authToken);
  }

  render() {
    const { userList } = this.props;
    return (
      <React.Fragment>
        <div>
          <ul>
            {userList && userList.data &&
              userList.data?.map((p) => (
                <div key={p.id} class="card">
                  <label> {p.name} </label>
                </div>
              ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.authReducer.userList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserList: (token) => dispatch(authActions.getUserList(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
