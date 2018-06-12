FROM ubuntu:14.04

RUN echo '******* installing curl ********'
RUN apt-get update -qqy \
  && apt-get -qqy install \
  curl

RUN echo '******* installing node and npm ********'
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get -qqy update && apt-get -qqy install nodejs \
  && npm install npm@latest -g

RUN echo '******* installing prep ********'
RUN apt-get update -qqy \
  && apt-get -qqy install \
  wget ca-certificates apt-transport-https \
  ttf-wqy-zenhei ttf-unfonts-core \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

RUN echo '******* installing chrome ********'
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb https://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
  && apt-get update -qqy \
  && apt-get -qqy install google-chrome-stable \
  && rm /etc/apt/sources.list.d/google-chrome.list \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

#RUN echo '******* running ci ********'
#RUN npm install
#RUN npm run ci