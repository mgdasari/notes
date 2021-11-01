FROM nexuscoe.rjil.ril.com:5004/mhart/alpine-node:8.15.1

# Setting the work directory
WORKDIR /opt/idamv2/IDAM

# Copying the source from current directory to work directory

ADD src/anonymous src/anonymous
ADD src/ldap src/ldap
ADD src/displayprofile src/displayprofile
ADD src/messagingqueue src/messagingqueue
ADD src/jioaccessmanager src/jioaccessmanager
ADD src/userremove src/userremove
ADD src/otpsend src/otpsend
ADD src/otpverify src/otpverify
ADD src/anonymousotpstatus src/anonymousotpstatus
ADD src/anonymousotpverify src/anonymousotpverify
ADD src/authtokenverify src/authtokenverify
ADD src/getsessiondetails src/getsessiondetails
ADD src/verifiedattributeremove src/verifiedattributeremove
ADD src/attributeverify src/attributeverify
ADD src/switchprofile src/switchprofile
ADD src/cassandra src/cassandra
ADD src/dbclient src/dbclient
ADD src/node_modules src/node_modules
ADD src/regular src/regular
ADD src/sessionstore src/sessionstore
ADD src/sharedpackages src/sharedpackages
ADD src/deviceverify src/deviceverify
ADD src/ca-apm-monitoring src/ca-apm-monitoring
ADD src/httpclientpool src/httpclientpool
ADD src/anonymousotpsend src/anonymousotpsend

# Creating the directory which stores the logs
RUN mkdir /opt/idamv2/logs

# Add new group
RUN addgroup -S idam

# Add new user
RUN adduser -S idam -G idam

# Changing the ownership of logs directory
RUN chown -R idam:idam /opt/idamv2/logs

RUN chown -R idam:idam /opt/idamv2/IDAM/src/node_modules

# Use newly created user
USER idam

# Expose the ports
EXPOSE 9035

CMD ["node", "src/anonymousotpsend/anonymousotpsend.js", "&"]