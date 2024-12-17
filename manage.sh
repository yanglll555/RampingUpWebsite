#!/bin/bash

PROJECT_DIR="/opt/RampingUpWebsite"
PID_FILE="$PROJECT_DIR/app.pid"
LOG_FILE="$PROJECT_DIR/app.log"

start_app() {
    cd $PROJECT_DIR

    if ! command -v npm &> /dev/null
    then
        echo "npm could not be found. Please install Node.js and npm."
        exit 1
    fi

    nohup npm run start > $LOG_FILE 2>&1 &
    APP_PID=$!
    echo $APP_PID > $PID_FILE

    if [ $? -eq 0 ]
    then
        echo "Application started successfully with PID $APP_PID."
    else
        echo "Failed to start the application."
        exit 1
    fi
}

stop_app() {
    if [ ! -f $PID_FILE ]; then
        echo "PID file not found. Is the application running?"
        exit 1
    fi

    APP_PID=$(cat $PID_FILE)
    
    if ps -p $APP_PID > /dev/null
    then
        pkill -P $APP_PID
        kill $APP_PID
        sleep 2  # give it a moment to terminate
        if ps -p $APP_PID > /dev/null
        then
            echo "Process $APP_PID did not terminate, forcing kill..."
            kill -9 $APP_PID
        fi
    else
        echo "No process found with PID $APP_PID. Removing stale PID file."
    fi

    rm $PID_FILE
    echo "Application stopped successfully."
}

status_app() {
    if [ ! -f $PID_FILE ]; then
        echo "Application is not running."
        exit 1
    fi

    APP_PID=$(cat $PID_FILE)
    if ps -p $APP_PID > /dev/null
    then
        echo "Application is running with PID $APP_PID."
    else
        echo "Application is not running."
    fi
}

# New function to kill all node processes related to the app
kill_app_processes() {
    echo "Killing all node processes related to the application..."
    ps aux | grep '/opt/RampingUpWebsite' | grep -v grep | awk '{print $2}' | xargs kill -9
    echo "All related node processes killed."
}

case "$1" in
    start)
        start_app
        ;;
    stop)
        kill_app_processes
        stop_app
        ;;
    status)
        status_app
        ;;
    *)
        echo "Usage: $0 {start|stop|status}"
        exit 1
        ;;
esac
