import moment from "moment";

const formatDate = (dateValue, dateFormat) => moment(dateValue).format(dateFormat);

export default { formatDate };
