let permissions = {
'getUsers': {
all: ['head-trainer'],
read : ['trainee', 'trainer'],
write : ['trainer'],
delete: [],
}
}
function hasPermission ( getUsers , role , permissionType )
{
let {getUsers : { all : [ x ] , read : [ b , c ] , write : [ d ] , delete : [] } } = permissions;
if( role == x)
{
if( permissionType == "all" || permissionType == "write" || permissionType == "read" || permissionType == "delete")
{
return (console.log("True"));
}
else
{
return (console.log("False"));
}
}
if( role == b)
{
if(permissionType == "read" )
{
return (console.log("True"));
}
else
{
return (console.log("False"));
}
}
if( role == c)
{
if(permissionType == "read" || permissionType == "write")
{
return (console.log("True"));
}
else
{
return (console.log("False"));
}
}
}
hasPermission ("getUsers" , "trainee" , "write" );
