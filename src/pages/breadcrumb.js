import sentry from '../utils/sentry';

function BreadcrumbPage() {
    return (
      <div>
        <button onClick={() => {
            sentry.addBreadcrumb({
                category: 'payment',
                level: 'info',
                data: {
                    name: 'step1'
                },
            })
        }}>step1</button>
        <button onClick={() => {
            sentry.addBreadcrumb({
                category: 'payment',
                level: 'info',
                data: {
                    name: 'step2'
                },
            })
        }}>step2</button>
        <button onClick={() => {
            sentry.addBreadcrumb({
                category: 'payment',
                level: 'info',
                data: {
                    name: 'step2'
                },
            })
        }}>step2</button>
      </div>
    );
  }
  
  export default BreadcrumbPage;
  