import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';

const CategoryTag = () => {
    return (
        <Layout>
            <Admin>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage Categories and Tags</h2>
                        </div>
                        <div className="col-md-4">
                            <p>categories</p>
                        </div>
                        <div className="col-md-8">
                            <p>tag</p>
                        </div>
                    </div>
                </div>
                
            </Admin>        
        </Layout>
    );
};

export default CategoryTag;