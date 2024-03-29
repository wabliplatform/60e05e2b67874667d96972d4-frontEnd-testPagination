/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Card model module.
 * @module model/Card
 * @version 1.0.0
 */
class Card {
    /**
     * Constructs a new <code>Card</code>.
     * @alias module:model/Card
     * @param cardText {String} 
     * @param cardDescription {String} 
     */
    constructor(cardText, cardDescription) { 
        
        Card.initialize(this, cardText, cardDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cardText, cardDescription) { 
        obj['cardText'] = cardText;
        obj['cardDescription'] = cardDescription;
    }

    /**
     * Constructs a <code>Card</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Card} obj Optional instance to populate.
     * @return {module:model/Card} The populated <code>Card</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Card();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('cardText')) {
                obj['cardText'] = ApiClient.convertToType(data['cardText'], 'String');
            }
            if (data.hasOwnProperty('cardDescription')) {
                obj['cardDescription'] = ApiClient.convertToType(data['cardDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Card.prototype['_id'] = undefined;

/**
 * @member {String} cardText
 */
Card.prototype['cardText'] = undefined;

/**
 * @member {String} cardDescription
 */
Card.prototype['cardDescription'] = undefined;






export default Card;

