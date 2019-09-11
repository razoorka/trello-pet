import Ajv from 'ajv';
import _ from 'lodash';

const ajv = new Ajv({ removeAdditional: true });

const allSchemas = {};
const compiledSchemas = _.mapValues(allSchemas, value => ajv.compile(value));

export default compiledSchemas;
