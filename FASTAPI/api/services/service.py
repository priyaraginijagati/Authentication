from mongoengine import Document, StringField

class ExampleModel(Document):
    name = StringField(required=True)
    description = StringField()
