export enum Type {
  /**
   * Not specified, should not be used.
   */
  TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED',
  /**
   * OpenAPI string type
   */
  STRING = 'STRING',
  /**
   * OpenAPI number type
   */
  NUMBER = 'NUMBER',
  /**
   * OpenAPI integer type
   */
  INTEGER = 'INTEGER',
  /**
   * OpenAPI boolean type
   */
  BOOLEAN = 'BOOLEAN',
  /**
   * OpenAPI array type
   */
  ARRAY = 'ARRAY',
  /**
   * OpenAPI object type
   */
  OBJECT = 'OBJECT',
  /**
   * Null type
   */
  NULL = 'NULL',
}
