import "./order-info.css";
const OrderInfo = ()=> {
    return (
        <>
            <div className="orderInfo-container">
                <div className="order-info">
                    <table>
                        <thead>
                            <th>Status</th>
                            <th>Door</th>
                            <th>Time</th>
                        </thead>
                        <tbody>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default OrderInfo;