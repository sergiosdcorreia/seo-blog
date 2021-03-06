import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Admin dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="/admin/crud/category-tag">
                                        Create Category
                                    </a>
                                </li>

                                <li className="list-group-item">
                                    <a href="/admin/crud/category-tag">
                                        Create Tag
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/admin/crud/blog">
                                        Create Blog
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/admin/crud/blogs">
                                        Update/Delete Blogs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            right
                        </div>
                    </div>
                </div>
                
            </Admin>        
        </Layout>
    );
};

export default AdminIndex;
