from flask_restful import Resource, Api, fields, marshal_with, reqparse
from model import *
from werkzeug.exceptions import HTTPException
from flask_cors import CORS
import json
from flask import make_response
from flask_security import auth_required, roles_required
import os
from functools import wraps
from flask import abort
from flask_security import roles_accepted

api = Api()

def any_role_required(*roles):
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            if not roles_accepted(*roles):
                abort(403, description="Insufficient permissions")
            return fn(*args, **kwargs)
        return decorator
    return wrapper

#==========================Validation========================================================
class NotFoundError(HTTPException):
    def __init__(self,status_code):
        message = {"error_code":"BE1009","error_message":"Not Found"}
        self.response = make_response(json.dumps(message), status_code)

class BusinessValidationError(HTTPException):
    def __init__(self, status_code, error_code, error_message):
        message = {"error_code":error_code,"error_message":error_message}
        self.response = make_response(json.dumps(message), status_code)

class BadRequestError(HTTPException):
    def __init__(self, status_code, error_code, error_message):
        message = {"error_code":error_code,"error_message":error_message}
        self.response = make_response(json.dumps(message), status_code)


class UnauthorizedError(HTTPException):
    def __init__(self, status_code, error_code, error_message):
        message = {"error_code":error_code,"error_message":error_message}
        self.response = make_response(json.dumps(message), status_code)

class ForbiddenError(HTTPException):
    def __init__(self, status_code, error_code, error_message):
        message = {"error_code":error_code,"error_message":error_message}
        self.response = make_response(json.dumps(message), status_code)

class ConflictError(HTTPException):
    def __init__(self, status_code, error_code, error_message):
        message = {"error_code":error_code,"error_message":error_message}
        self.response = make_response(json.dumps(message), status_code)

class InternalServerError(HTTPException):
    def __init__(self, status_code, error_code, error_message):
        message = {"error_code":error_code,"error_message":error_message}
        self.response = make_response(json.dumps(message), status_code)

class ServiceUnavailableError(HTTPException):
    def __init__(self, status_code, error_code, error_message):
        message = {"error_code":error_code,"error_message":error_message}
        self.response = make_response(json.dumps(message), status_code)

class GatewayTimeoutError(HTTPException):
    def __init__(self, status_code, error_code, error_message):
        message = {"error_code":error_code,"error_message":error_message}
        self.response = make_response(json.dumps(message), status_code)


#==============================output fields========================================
kycDetails_fields = {
    'id': fields.Integer,
    'user_id': fields.Integer,
    'first_name': fields.String,
    'last_name': fields.String,
    'dob': fields.String,
    'address': fields.String,
    'city': fields.String,
    'state': fields.String,
    'country': fields.String,
    'pincode': fields.String,
    'aadhar_number': fields.String,
    'pan_number': fields.String,
    'kyc_status': fields.String,
    'created_at': fields.String,
    'aadhar_path': fields.String,
    'pan_path': fields.String,
    'kyc_doc_path': fields.String
}


#====================Create Kyc pares=======================================

create_kyc_parser = reqparse.RequestParser()
create_kyc_parser.add_argument('first_name')
create_kyc_parser.add_argument('last_name')
create_kyc_parser.add_argument('dob')
create_kyc_parser.add_argument('address')
create_kyc_parser.add_argument('city')
create_kyc_parser.add_argument('state')
create_kyc_parser.add_argument('country')
create_kyc_parser.add_argument('pincode')
create_kyc_parser.add_argument('aadhar_number')
create_kyc_parser.add_argument('pan_number')
create_kyc_parser.add_argument('kyc_status')
create_kyc_parser.add_argument('created_at')
create_kyc_parser.add_argument('aadhar_path')
create_kyc_parser.add_argument('pan_path')
create_kyc_parser.add_argument('kyc_doc_path')

#====================Update Kyc pares=======================================
update_kyc_parser = reqparse.RequestParser()
update_kyc_parser.add_argument('first_name')
update_kyc_parser.add_argument('last_name')
update_kyc_parser.add_argument('dob')
update_kyc_parser.add_argument('address')
update_kyc_parser.add_argument('city')
update_kyc_parser.add_argument('state')
update_kyc_parser.add_argument('country')
update_kyc_parser.add_argument('pincode')
update_kyc_parser.add_argument('aadhar_number')
update_kyc_parser.add_argument('pan_number')
update_kyc_parser.add_argument('kyc_status')    
update_kyc_parser.add_argument('aadhar_path')
update_kyc_parser.add_argument('pan_path')
update_kyc_parser.add_argument('kyc_doc_path')

#==================================API=======================================

class KycDetailsAPI(Resource):
    @marshal_with(kycDetails_fields)
    def post(self):
        args = create_kyc_parser.parse_args()
        user_id = args.get('user_id', None)
        first_name = args.get('first_name', None)
        last_name = args.get('last_name', None)
        dob = args.get('dob', None)
        address = args.get('address', None)
        city = args.get('city', None)
        state = args.get('state', None)
        country = args.get('country', None)
        pincode = args.get('pincode', None)
        aadhar_number = args.get('aadhar_number', None)
        pan_number = args.get('pan_number', None)
        kyc_status = args.get('kyc_status', None)
        created_at = args.get('created_at', None)
        aadhar_path = args.get('aadhar_path', None)
        pan_path = args.get('pan_path', None)
        kyc_doc_path = args.get('kyc_doc_path', None)

        if not user_id:
            raise BadRequestError(400, "BE1001", "user_id is required")
        if not first_name:
            raise BadRequestError(400, "BE1002", "first_name is required")
        if not last_name:
            raise BadRequestError(400, "BE1003", "last_name is required")
        if not dob:
            raise BadRequestError(400, "BE1004", "dob is required")
        if not address:
            raise BadRequestError(400, "BE1005", "address is required")
        if not city:
            raise BadRequestError(400, "BE1006", "city is required")
        if not state:
            raise BadRequestError(400, "BE1007", "state is required")
        if not country:
            raise BadRequestError(400, "BE1008", "country is required")
        if not pincode:
            raise BadRequestError(400, "BE1009", "pincode is required")
        if not aadhar_number:
            raise BadRequestError(400, "BE1010", "aadhar_number is required")
        if not pan_number:
            raise BadRequestError(400, "BE1011", "pan_number is required")
        if not kyc_status:
            raise BadRequestError(400, "BE1012", "kyc_status is required")
        if not created_at:
            raise BadRequestError(400, "BE1013", "created_at is required")
        if not aadhar_path:
            raise BadRequestError(400, "BE1014", "aadhar_path is required")
        if not pan_path:
            raise BadRequestError(400, "BE1015", "pan_path is required")
        if not kyc_doc_path:
            raise BadRequestError(400, "BE1016", "kyc_doc_path is required")
        
        kyc_details = KycDetails(user_id=user_id, first_name=first_name, last_name=last_name, dob=dob, address=address, city=city, state=state, country=country, pincode=pincode, aadhar_number=aadhar_number, pan_number=pan_number, kyc_status=kyc_status, created_at=created_at, aadhar_path=aadhar_path, pan_path=pan_path, kyc_doc_path=kyc_doc_path)
        db.session.add(kyc_details)
        db.session.commit()
        return kyc_details, 201
    
    @marshal_with(kycDetails_fields)
    def get(self, id):
        user_id = id
        kyc_details = KycDetails.query.filter_by(user_id=user_id).first()
        if not kyc_details:
            raise NotFoundError(404)
        return kyc_details, 200
    






#==============================API Endpoints========================================
api.add_resource(KycDetailsAPI, '/kyc_details', '/kyc_details/<int:id>')


    



    




