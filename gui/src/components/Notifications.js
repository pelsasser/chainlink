import React, { Fragment } from 'react'
import { Link } from 'react-static'
import LinkButton from 'components/LinkButton'
import Flash from './Flash'
import { receiveSignoutSuccess } from 'actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class Notifications extends React.Component {
  signOutLocally = () => {
    this.props.receiveSignoutSuccess()
  }

  errorPresenter = (err, i) => {
    if (err.status === 401) {
      return <p key={i}> {err.detail}
        <LinkButton onClick={this.signOutLocally}>
          Sign In Again
        </LinkButton>
      </p>
    }
    return <p key={i}>{err.detail}</p>
  }

  successPresenter = (success, i) => {
    // TODO: Update backend to have JSONAPI responses on Create to better discern between types.
    const isJob = success => success.initiators
    if (isJob(success)) {
      return <p key={i}>
        Job <Link to={`/job_specs/${success.id}`}>{success.id}</Link> was successfully created
      </p>
    }
    return <p key={i}>
      Bridge <Link to={`/bridges/${success.name}`}>{success.name}</Link> was successfully created
    </p>
  }

  render () {
    const { errors, successes, classes } = this.props
    return (
      <Fragment>
        {errors.length > 0 &&
          <Flash error className={classes.flash}>
            {errors.map((err, i) => this.errorPresenter(err, i))}
          </Flash>
        }
        {successes.length > 0 && (
          <Flash success className={classes.flash}>
            {successes.map((succ, i) => this.successPresenter(succ, i))}
          </Flash>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.notifications.errors,
  successes: state.notifications.successes
})

const mapDispatchToProps = dispatch => bindActionCreators({receiveSignoutSuccess}, dispatch)

export const ConnectedNotifications = connect(mapStateToProps, mapDispatchToProps)(Notifications)

export default ConnectedNotifications
