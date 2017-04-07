/* 
 * Koding API
 *
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type UnauthorizedRequest struct {

	// HTTP Error Code
	Status int32 `json:"status,omitempty"`

	// Error description
	Message string `json:"message,omitempty"`

	// Error Code
	Code string `json:"code,omitempty"`
}