import { UpdateSessionForm } from '~4features/session'

export function SettingsPage() {
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <UpdateSessionForm />
          </div>
        </div>
      </div>
    </div>
  )
}
